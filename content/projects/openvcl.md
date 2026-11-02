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
  lastSynchronized: '2026-11-02T15:53:52.951Z'
automation:
  sync: true
  github:
    repoEtag: W/"8231f94eb5292e35b3072a05e8fbf433612c48c7b25b01fb0399bc8105512728"
    releasesEtag: '"a9f324b2a61da9854a428d9d24f3a16e20fe5f6fad6077a79cab1349ea45188c"'
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
