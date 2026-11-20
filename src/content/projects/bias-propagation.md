---
title: Bias propagation in LLM agent pipelines
summary: Tests whether bias measured at single stages of an LLM agent pipeline predicts bias in the full pipeline.
order: 1
stack: [Python, RAG, LLM agents, PACE/ICE]
icon: network
status: in-progress
# repo: add when public
---

*Course project, CSE 8803 (Language Models and Agents). In progress: experiments and an "assessor" component are still running, so nothing here is a final result.*

## The problem

LLM agent pipelines have stages: retrieval, evidence selection, and reasoning or decision. Teams usually audit only the final output. If bias at individual stages does not predict bias end to end, auditing stages is not enough.

## Approach

The domain is mortgage underwriting. The pipeline uses HMDA loan-level application data, with the Fannie Mae Selling Guide (about 1,200 pages) as the retrieval corpus. No models are trained; experiments run on Georgia Tech PACE/ICE compute.

Design choices:

- **Counterfactual pairs:** the same case where only a demographic cue, such as a name, changes.
- **Stage masking** to isolate each stage's contribution.
- **Statistical controls:** noise-floor and arity-matching controls.
- **Leakage prevention:** structure-aware chunking by section ID, a frozen corpus version, deterministic retrieval, and chunk-ID-only handoffs between stages so cues cannot leak.
- **Settings:** temperature 0.7 as the primary setting, with a lower-temperature sensitivity check on a subset.

Primary research questions: how bias composes across stages, selection versus interpretation, and how effective repair is. Secondary: discretionary effort and scrutiny under budget constraints, and independent versus competitive candidate selection.

## Result

Results are not final yet. They will be added when the experiments and the assessor component finish.

## Links

Repo and write-up: coming soon.
