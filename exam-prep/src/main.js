import { BANK, TOPIC_ORDER } from "./answers";

(function () {
  // index questions by topic
  const byTopic = {};
  BANK.forEach((q, i) => {
    (byTopic[q.t] = byTopic[q.t] || []).push(i);
  });

  // Build 4 variants by interleaving topics round-robin so each variant
  // samples broadly across the whole syllabus, then a 5th "full mock" pool.
  function buildVariant(offset, count) {
    const idxs = [];
    let cursor = offset;
    const pools = TOPIC_ORDER.map((t) => byTopic[t].slice());
    let exhausted = 0;
    while (idxs.length < count && exhausted < pools.length) {
      exhausted = 0;
      for (let p = 0; p < pools.length; p++) {
        const pool = pools[(p + cursor) % pools.length];
        if (pool.length === 0) {
          exhausted++;
          continue;
        }
        idxs.push(pool.shift());
        if (idxs.length >= count) break;
      }
      cursor++;
    }
    return idxs;
  }

  const VARIANTS = [
    {
      id: "v1",
      name: "Variant I",
      desc: "Legal basis, classification of emergencies, and the WMD/nuclear damage chain.",
      count: 24,
      seedOffset: 0,
    },
    {
      id: "v2",
      name: "Variant II",
      desc: "Chemical & biological agents, sheltering, evacuation, and monitoring systems.",
      count: 26,
      seedOffset: 1,
    },
    {
      id: "v3",
      name: "Variant III",
      desc: "Rescue operations, first aid fundamentals, bleeding, burns, and trauma response.",
      count: 25,
      seedOffset: 2,
    },
    {
      id: "v4",
      name: "Variant IV",
      desc: "Drowning, poisoning, CPR protocol, antidotes, and the civil defense medical kit.",
      count: 25,
      seedOffset: 3,
    },
    {
      id: "vfull",
      name: "Full Mock Exam",
      desc: "A randomized 30-question draw from the entire 100-question bank, every retake.",
      count: 30,
      seedOffset: 4,
      isFull: true,
    },
  ];

  function getVariantIndexSets() {
    // deterministic-ish split for v1-v4 so coverage of all 100 is guaranteed across them combined,
    // but order/sample within is randomized at quiz-start time.
    const all = BANK.map((_, i) => i);
    const groups = [[], [], [], []];
    TOPIC_ORDER.forEach((t, ti) => {
      byTopic[t].forEach((qi, j) => {
        groups[(ti + j) % 4].push(qi);
      });
    });
    return groups;
  }
  const FIXED_GROUPS = getVariantIndexSets();

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickQuestionsFor(variant) {
    let pool;
    if (variant.isFull) {
      pool = shuffle(BANK.map((_, i) => i));
    } else {
      const groupIdx = VARIANTS.findIndex((v) => v.id === variant.id);
      pool = shuffle(FIXED_GROUPS[groupIdx]);
    }
    const chosen = pool.slice(0, Math.min(variant.count, pool.length));
    // build runtime question objects with shuffled option order
    return chosen.map((origIdx) => {
      const src = BANK[origIdx];
      const order = shuffle(src.o.map((_, i) => i));
      return {
        topic: src.t,
        text: src.q,
        options: order.map((i) => src.o[i]),
        correctIndex: order.indexOf(src.a),
        explain: src.e,
      };
    });
  }

  // ============================================================
  // STATE & PERSISTENCE (in-memory only per session)
  // ============================================================
  const bestScores = {}; // variantId -> {pct, correct, total}

  let state = { view: "home" };

  function startVariant(variant) {
    const questions = pickQuestionsFor(variant);
    state = {
      view: "exam",
      variant,
      questions,
      current: 0,
      answers: new Array(questions.length).fill(null), // selected option index per q
      locked: new Array(questions.length).fill(false),
      startTime: Date.now(),
    };
    render();
  }

  function selectOption(qIndex, optIndex) {
    if (state.locked[qIndex]) return;
    state.answers[qIndex] = optIndex;
    state.locked[qIndex] = true;
    render();
  }

  function goTo(qIndex) {
    state.current = qIndex;
    render();
  }

  function nextQuestion() {
    if (state.current < state.questions.length - 1) {
      state.current++;
      render();
    } else {
      finishExam();
    }
  }

  function prevQuestion() {
    if (state.current > 0) {
      state.current--;
      render();
    }
  }

  function finishExam() {
    const total = state.questions.length;
    let correct = 0;
    state.questions.forEach((q, i) => {
      if (state.answers[i] === q.correctIndex) correct++;
    });
    const pct = Math.round((correct / total) * 100);
    const elapsedMs = Date.now() - state.startTime;

    const prevBest = bestScores[state.variant.id];
    if (!prevBest || pct > prevBest.pct) {
      bestScores[state.variant.id] = { pct, correct, total };
    }

    state = {
      view: "results",
      variant: state.variant,
      questions: state.questions,
      answers: state.answers,
      correct,
      total,
      pct,
      elapsedMs,
    };
    render();
  }

  function retake() {
    startVariant(state.variant);
  }

  function goHome() {
    state = { view: "home" };
    render();
  }

  // ============================================================
  // RENDERING
  // ============================================================
  const root = document.getElementById("cd-exam-root");

  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs)
      Object.keys(attrs).forEach((k) => {
        if (k === "class") e.className = attrs[k];
        else if (k === "html") e.innerHTML = attrs[k];
        else if (k.startsWith("on"))
          e.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        else e.setAttribute(k, attrs[k]);
      });
    (children || []).forEach((c) => {
      if (c) e.appendChild(c);
    });
    return e;
  }
  function text(s) {
    return document.createTextNode(s);
  }

  function formatTime(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return m + ":" + (ss < 10 ? "0" : "") + ss;
  }

  function render() {
    root.innerHTML = "";
    root.appendChild(el("div", { class: "cd-stripe" }));
    const shell = el("div", { class: "cd-shell cd-fade-in" });
    root.appendChild(shell);

    if (state.view === "home") renderHome(shell);
    else if (state.view === "exam") renderExam(shell);
    else if (state.view === "results") renderResults(shell);
  }

  function renderHome(shell) {
    shell.appendChild(
      el("div", { class: "cd-eyebrow" }, [
        el("span", { class: "dot" }),
        text("CIVIL DEFENSE \u2014 EXAM PREP"),
      ]),
    );
    shell.appendChild(
      el("h1", { class: "cd-title" }, [text("Practice Exam Console")]),
    );
    shell.appendChild(
      el("p", { class: "cd-sub" }, [
        text(
          "Five retakeable variants pulled from the full 100-question bank. Questions and answer order reshuffle every attempt, so no two runs look identical.",
        ),
      ]),
    );

    const grid = el("div", { class: "cd-grid" });
    VARIANTS.forEach((v, i) => {
      const best = bestScores[v.id];
      const card = el(
        "button",
        { class: "cd-card", onClick: () => startVariant(v) },
        [
          el("div", { class: "cd-card-num" }, [
            text("SET " + String(i + 1).padStart(2, "0")),
          ]),
          el("div", { class: "cd-card-name" }, [text(v.name)]),
          el("p", { class: "cd-card-desc" }, [text(v.desc)]),
          el("div", { class: "cd-card-meta" }, [
            text(v.count + " QUESTIONS \u00b7 SHUFFLED"),
          ]),
        ],
      );
      if (best) {
        card.appendChild(
          el("div", { class: "cd-best" }, [
            text("LAST BEST"),
            el("b", null, [
              text(
                best.correct + "/" + best.total + " \u00b7 " + best.pct + "%",
              ),
            ]),
          ]),
        );
      }
      grid.appendChild(card);
    });
    shell.appendChild(grid);

    shell.appendChild(
      el("p", { class: "cd-foot-note" }, [
        text(
          "Tip: run the four topic variants first to drill weak areas, then take the Full Mock Exam as a final check\u2014it draws 30 random questions from across all 100 source items.",
        ),
      ]),
    );
  }

  function renderExam(shell) {
    const { variant, questions, current, answers, locked } = state;
    const total = questions.length;
    const answeredCount = locked.filter(Boolean).length;

    shell.appendChild(
      el("div", { class: "cd-eyebrow" }, [
        el("span", { class: "dot" }),
        text(variant.name.toUpperCase()),
      ]),
    );

    const progRow = el("div", { class: "cd-progress-row" });
    const track = el("div", { class: "cd-progress-track" });
    track.appendChild(
      el("div", {
        class: "cd-progress-fill",
        style: "width:" + Math.round((answeredCount / total) * 100) + "%",
      }),
    );
    progRow.appendChild(track);
    progRow.appendChild(
      el("div", { class: "cd-progress-text" }, [
        text("Q" + (current + 1) + " / " + total),
      ]),
    );
    shell.appendChild(progRow);

    // dot map for navigation
    const dotmap = el("div", { class: "cd-dotmap" });
    questions.forEach((q, i) => {
      const classes = ["cd-dotmap-btn"];
      let cls = "";
      if (i === current) cls += " is-current";
      if (locked[i]) {
        cls += " is-answered";
        if (answers[i] === q.correctIndex) cls += " is-correct";
        else cls += " is-wrong";
      }
      const btn = el("button", { class: cls.trim(), onClick: () => goTo(i) }, [
        text(String(i + 1)),
      ]);
      dotmap.appendChild(btn);
    });
    shell.appendChild(dotmap);

    const q = questions[current];
    const card = el("div", { class: "cd-qcard" });
    card.appendChild(
      el("div", { class: "cd-qtag" }, [text(q.topic.toUpperCase())]),
    );
    card.appendChild(el("p", { class: "cd-qtext" }, [text(q.text)]));

    const optsWrap = el("div", { class: "cd-options" });
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((opt, oi) => {
      const isLocked = locked[current];
      let cls = "cd-opt";
      if (isLocked) {
        cls += " cd-locked";
        if (oi === q.correctIndex) cls += " cd-correct";
        else if (oi === answers[current]) cls += " cd-wrong";
      } else if (answers[current] === oi) {
        cls += " selected";
      }
      const optBtn = el(
        "button",
        { class: cls, onClick: () => selectOption(current, oi) },
        [
          el("span", { class: "cd-opt-letter" }, [text(letters[oi])]),
          el("span", null, [text(opt)]),
        ],
      );
      if (isLocked) optBtn.disabled = false; // keep clickable for nav but no-op visually since locked class disables hover styling
      optsWrap.appendChild(optBtn);
    });
    card.appendChild(optsWrap);

    if (locked[current]) {
      const correctText = q.options[q.correctIndex];
      card.appendChild(
        el("div", { class: "cd-explain" }, [
          el("b", null, [
            text(
              answers[current] === q.correctIndex ? "Correct. " : "Not quite. ",
            ),
          ]),
          text(q.explain),
        ]),
      );
    }

    shell.appendChild(card);

    const navRow = el("div", { class: "cd-nav-row" });
    const leftBtns = el("div", { style: "display:flex; gap:8px;" }, [
      el(
        "button",
        {
          class: "cd-btn",
          onClick: prevQuestion,
          disabled: current === 0 ? "true" : null,
        },
        [text("Back")],
      ),
    ]);
    leftBtns.querySelector("button").toggleAttribute("disabled", current === 0);

    const rightBtns = el("div", {
      style: "display:flex; gap:8px; align-items:center;",
    });
    rightBtns.appendChild(
      el("button", { class: "cd-btn-ghost", onClick: goHome }, [
        text("Exit to menu"),
      ]),
    );
    const nextLabel = current === total - 1 ? "Finish exam" : "Next question";
    const nextBtn = el(
      "button",
      { class: "cd-btn cd-btn-primary", onClick: nextQuestion },
      [text(nextLabel)],
    );
    nextBtn.disabled = !locked[current];
    rightBtns.appendChild(nextBtn);

    navRow.appendChild(leftBtns);
    navRow.appendChild(rightBtns);
    shell.appendChild(navRow);
  }

  function renderResults(shell) {
    const { variant, questions, answers, correct, total, pct, elapsedMs } =
      state;
    const passed = pct >= 70;

    shell.appendChild(
      el("div", { class: "cd-eyebrow" }, [
        el("span", { class: "dot" }),
        text(variant.name.toUpperCase() + " \u2014 DEBRIEF"),
      ]),
    );

    const head = el("div", { class: "cd-result-head" });
    head.appendChild(
      el("div", { class: "cd-result-score " + (passed ? "pass" : "fail") }, [
        text(correct + " / " + total),
      ]),
    );
    head.appendChild(
      el("div", { class: "cd-result-pct" }, [
        text(pct + "% correct \u00b7 completed in " + formatTime(elapsedMs)),
      ]),
    );
    head.appendChild(
      el("div", { class: "cd-result-verdict " + (passed ? "pass" : "fail") }, [
        text(passed ? "Pass \u2014 70%+" : "Below pass line (70%)"),
      ]),
    );
    shell.appendChild(head);

    const wrong = total - correct;
    const breakdown = el("div", { class: "cd-breakdown" });
    breakdown.appendChild(
      el("div", { class: "cd-bstat" }, [
        el("div", { class: "n", style: "color:var(--safety-green)" }, [
          text(String(correct)),
        ]),
        el("div", { class: "l" }, [text("Correct")]),
      ]),
    );
    breakdown.appendChild(
      el("div", { class: "cd-bstat" }, [
        el("div", { class: "n", style: "color:var(--safety-red)" }, [
          text(String(wrong)),
        ]),
        el("div", { class: "l" }, [text("Missed")]),
      ]),
    );
    breakdown.appendChild(
      el("div", { class: "cd-bstat" }, [
        el("div", { class: "n" }, [text(pct + "%")]),
        el("div", { class: "l" }, [text("Score")]),
      ]),
    );
    shell.appendChild(breakdown);

    const navRow = el("div", {
      class: "cd-nav-row",
      style: "margin-bottom: 6px;",
    });
    navRow.appendChild(
      el("button", { class: "cd-btn-ghost", onClick: goHome }, [
        text("Choose another variant"),
      ]),
    );
    navRow.appendChild(
      el("button", { class: "cd-btn cd-btn-primary", onClick: retake }, [
        text("Retake " + variant.name),
      ]),
    );
    shell.appendChild(navRow);

    shell.appendChild(
      el("div", { class: "cd-section-label" }, [
        text("REVIEW \u2014 MISSED QUESTIONS"),
      ]),
    );

    if (wrong === 0) {
      shell.appendChild(
        el("div", { class: "cd-empty-review" }, [
          text(
            "Clean sweep \u2014 every question answered correctly on this attempt.",
          ),
        ]),
      );
    } else {
      questions.forEach((q, i) => {
        if (answers[i] === q.correctIndex) return;
        const item = el("div", { class: "cd-review-item" });
        item.appendChild(el("div", { class: "cd-review-q" }, [text(q.text)]));
        item.appendChild(
          el("div", { class: "cd-review-row wrong-ans" }, [
            text(
              "Your answer: " +
                (answers[i] === null ? "Skipped" : q.options[answers[i]]),
            ),
          ]),
        );
        item.appendChild(
          el("div", { class: "cd-review-row right-ans" }, [
            text("Correct answer: " + q.options[q.correctIndex]),
          ]),
        );
        item.appendChild(
          el("div", { class: "cd-review-explain" }, [text(q.explain)]),
        );
        shell.appendChild(item);
      });
    }
  }

  render();
})();
