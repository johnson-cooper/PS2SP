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
  lastSynchronized: '2026-11-26T15:18:18.997Z'
automation:
  sync: true
  github:
    repoEtag: W/"18ac4bf2ac0c7e69d0e7f9c9cc881657e358f819531eb99660684b53c6390d61"
    releasesEtag: '"4a379f54e63716ee058ad0149b63163d56132c52d2eaa3a556019eed41a8343b"'
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
