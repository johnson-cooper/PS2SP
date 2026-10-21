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
  lastCommit: '2026-10-21T14:01:08Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastChecked: '2026-10-16T06:23:09.688Z'
  lastSynchronized: '2026-10-21T15:15:34.217Z'
automation:
  sync: true
  github:
    repoEtag: W/"8c7c41c33eac0f37c171b87274756e650cd37e85e998f314940e12428a90bb80"
    releasesEtag: '"611e30d199f302d8f78bca285a41fb0f9611f5e583be1fd234f471bc48e862ef"'
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
