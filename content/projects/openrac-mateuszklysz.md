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
  lastCommit: '2026-10-26T06:12:33Z'
latestRelease:
  tag: launcher-dev-fix-android-disc-setup
  name: v0.8.5-dev.63 (fix/android-disc-setup)
  publishedAt: '2026-10-25T12:43:45Z'
  url: >-
    https://github.com/mateuszklysz/OpenRAC/releases/tag/launcher-dev-fix-android-disc-setup
activity:
  lastChecked: '2026-10-13T19:32:43.126Z'
  lastSynchronized: '2026-10-26T06:14:42.326Z'
automation:
  sync: true
  github:
    repoEtag: W/"109b1e55f4ce2341ff54c2923df0b65a28b5fb1bbabed4329904e8fcbb91beef"
    releasesEtag: W/"20a0ca90b8501c503a49305150b617b60055a321507153d6c36d8bdf7e57a0f3"
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
