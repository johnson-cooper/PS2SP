---
name: openvcl
slug: openvcl
summary: >-
  Replacement for VCL (VU Command Line) - https://github.com/ps2dev/openvcl is
  the most up-to-date PS2SDK fork that ships with the toolchain.
categories:
  - sdks
  - development
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: null
homepage: 'https://github.com/ps2dev/openvcl'
source:
  provider: github
  repository: glampert/openvcl
  repositoryId: '405606056'
  url: 'https://github.com/glampert/openvcl'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-01T09:39:18Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastChecked: '2026-10-16T06:23:09.688Z'
  lastSynchronized: '2026-11-01T15:10:13.352Z'
automation:
  sync: true
  github:
    repoEtag: W/"525978af6bff03938cab515bd1bf56848f4b11c82e47bc6dd2a9ab010556b4b5"
    releasesEtag: '"ad77fe11f72b65d0026fedb2545459954fd125a98ebe703c07954f3273e8f4aa"'
discovery:
  method: 'pending-promotion:incremental:ps2sdk in:name,description,readme'
  confidence: 75
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: jsvennevid/openvcl
  source: jsvennevid/openvcl
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
