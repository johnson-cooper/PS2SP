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
  lastCommit: '2026-10-18T21:52:56Z'
latestRelease:
  tag: launcher-dev-feature-android-support
  name: OpenRAC Launcher 0.7.5-dev.27 (feature/android-support)
  publishedAt: '2026-10-18T17:46:15Z'
  url: >-
    https://github.com/mateuszklysz/OpenRAC/releases/tag/launcher-dev-feature-android-support
activity:
  lastChecked: '2026-10-13T19:32:43.126Z'
  lastSynchronized: '2026-10-19T06:19:06.806Z'
automation:
  sync: true
  github:
    repoEtag: W/"38c80548b8fb27c02717ed53c30c1c0597a9b3ded0c3647919db5575731781df"
    releasesEtag: W/"b32a8a0986873f8d3cb924d96c0bd13bd3dbad8dd6e8d175088db0b07d11d854"
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
