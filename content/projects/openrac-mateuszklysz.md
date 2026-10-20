---
name: OpenRAC
slug: openrac-mateuszklysz
summary: A matching decompilation and PC port for the Ratchet & Clank series.
categories:
  - preservation
  - development
  - ports
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: mateuszklysz/OpenRAC
  repositoryId: '1417547884'
  url: 'https://github.com/mateuszklysz/OpenRAC'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-19T16:52:41Z'
latestRelease:
  tag: launcher-dev-feature-android-support
  name: OpenRAC Launcher 0.8.0-dev.38 (feature/android-support)
  publishedAt: '2026-10-18T17:46:15Z'
  url: >-
    https://github.com/mateuszklysz/OpenRAC/releases/tag/launcher-dev-feature-android-support
activity:
  lastChecked: '2026-10-13T19:32:43.126Z'
  lastSynchronized: '2026-10-20T06:01:24.328Z'
automation:
  sync: true
  github:
    repoEtag: W/"eb4535d24549a539afb0fcedfb7728e0614a0632bed432c9fc3f4c15d664a010"
    releasesEtag: W/"e9a72fd774b82ff68f752feb26bb70bd05c8e33f89dbd81d3f5c47608a300f0a"
discovery:
  method: 'pending-promotion:incremental:"PlayStation 2" in:name,description,readme'
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
  forkOf: OpenRAC/OpenRAC
  source: OpenRAC/OpenRAC
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
