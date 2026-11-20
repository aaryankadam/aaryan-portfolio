---
title: VibeEngine
summary: Multimodal music discovery that turns a described mood or an image into song recommendations.
order: 4
stack: [React, Vite, FastAPI, Sentence embeddings]
status: in-progress
repo: https://github.com/aaryankadam/vibe-engine
# demo: TODO add once the hosted revamp is live
---

*Built at GT Hacklytics 2026. Shipped locally and currently being revamped for hosting at zero or near-zero cost.*

## The problem

Keyword search handles "songs by this artist" but not "the feeling of a rainy night drive". VibeEngine tries to understand the semantic essence of a vibe, so messy human descriptions, memories and images can be turned into a soundtrack.

## Approach

- **Input:** a text description, or an uploaded image such as a sunset or a busy street. For images, Gemini vision extracts musical attributes (tempo, genre, atmosphere).
- **Enrichment:** Gemini 2.5 Flash expands the raw prompt into a "lyrical search vector", which improves retrieval for abstract or poetic queries.
- **Retrieval:** song embeddings from the `all-MiniLM-L6-v2` sentence-transformer, searched by cosine similarity over a corpus of 500,000 songs.
- **Hybrid ranking:** semantic similarity is combined with a logarithmic popularity boost, `score = similarity * w_semantic + log10(views + 1) * w_popularity`. This addresses "cover contamination", where low-quality covers crowd out the original recording.
- **Explainability:** each recommendation comes with a generated justification linking the user's input to the track.
- **Stack:** FastAPI backend, React + Vite frontend.

TODO: the ranking weights, and any alternatives rejected.

## Result

TODO: evaluation numbers, if the revamp adds any. Until then this page describes the system only and claims no measured results.

## What I'd do next

- Host a public demo (currently local-only).
- TODO: 1-2 honest limitations.

## Links

- Repo: [vibe-engine](https://github.com/aaryankadam/vibe-engine)
- Demo: TODO (once hosted)
