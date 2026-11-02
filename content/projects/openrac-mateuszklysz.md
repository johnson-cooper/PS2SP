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
  lastCommit: '2026-11-02T05:58:04Z'
latestRelease:
  tag: launcher-dev-fix-windows-audio-stutter
  name: v0.10.1-dev.153 (fix/windows-audio-stutter)
  publishedAt: '2026-11-01T18:09:53Z'
  url: >-
    https://github.com/mateuszklysz/OpenRAC/releases/tag/launcher-dev-fix-windows-audio-stutter
activity:
  lastChecked: '2026-10-13T19:32:43.126Z'
  lastSynchronized: '2026-11-02T06:03:42.986Z'
automation:
  sync: true
  github:
    repoEtag: W/"c50d60eaea5d5a5b14c699865c4fad94a87cfe00231b4cd26ddc75df616de267"
    releasesEtag: W/"195996d48ad8df0648f6d44fd0e38862d315062c8814f32b4ab36898733a36b7"
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
