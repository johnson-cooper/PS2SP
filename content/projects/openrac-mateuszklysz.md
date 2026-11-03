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
  lastCommit: '2026-11-02T22:35:03Z'
latestRelease:
  tag: launcher-dev-feature-shared-menu
  name: v0.10.1-dev.185 (feature/shared-menu)
  publishedAt: '2026-11-02T11:36:20Z'
  url: >-
    https://github.com/mateuszklysz/OpenRAC/releases/tag/launcher-dev-feature-shared-menu
activity:
  lastChecked: '2026-10-13T19:32:43.126Z'
  lastSynchronized: '2026-11-03T06:49:08.445Z'
automation:
  sync: true
  github:
    repoEtag: W/"dfa71405df754cd39e358eb4b6fb1befbe7da51a8bdcd7d8b579a1e1ed8fb1a7"
    releasesEtag: W/"e32c532ebb2fff21734dbd5a415f2381a1c160f5fe9b58dd7a36d3d4fd3ecce1"
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
