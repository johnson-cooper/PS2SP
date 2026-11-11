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
  lastCommit: '2026-11-10T04:02:02Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastChecked: '2026-10-16T06:23:09.688Z'
  lastSynchronized: '2026-11-11T15:13:35.145Z'
automation:
  sync: true
  github:
    repoEtag: W/"24c19649e362b2dac3ccee8d9f405c4d7957e3e7f3aca4ae73ccc54851d41926"
    releasesEtag: '"4429150f34678cedd74c64579b30809858d8cdb312b1ed77eb714a79c20f6fb1"'
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
