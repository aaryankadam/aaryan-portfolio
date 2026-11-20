---
title: ECG classification and data efficiency
summary: Compares how much labeled data three ECG classification approaches need.
order: 2
stack: [Python, PyTorch, XGBoost, PTB-XL]
icon: pulse
status: in-progress
# repo: add when the final repo (or fork) is public
---

*Course project, CS 7643 (Deep Learning). In progress: the milestone report is done, the final report is due Dec 4 and the poster session is Dec 7. Multi-seed results are pending.*

## The problem

12-lead ECG classification into five diagnostic classes (NORM, MI, STTC, CD, HYP) when labels are scarce. The question is how much labeled data each approach needs.

## Approach

The project uses the PTB-XL dataset and compares three approaches at different fractions of the training data:

1. Wavelet features with classical ML (random forest, XGBoost, SVM).
2. A hybrid CNN-BiLSTM.
3. A patch-based Transformer.

Wavelet features are used for the classical track because raw signals have shifting beat positions and high dimensionality, while the diagnostic signal is shape-based. Three testable hypotheses were set in advance. Early single-seed data did not support two of the three, and the final report will state what the multi-seed results show.

## Result

Preliminary, single seed: the CNN-BiLSTM reaches test macro AUROC 0.855 at 5% of the training data and 0.924 at 100%.

Final multi-seed results, including the classical-track comparison, will be added when the project wraps up.

## Links

Repo and write-up: coming soon.
