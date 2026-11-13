---
name: pcsx2-win8
slug: pcsx2-win8-pareidolico
summary: 'A PCSX2 fork with Qt reverted to v6.8.4, in order to keep Windows 8.1 support.'
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://pcsx2.net'
source:
  provider: github
  repository: pareidolico/pcsx2-win8
  repositoryId: '1409827934'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-10T18:39:25Z'
latestRelease:
  tag: win81-2026.10.08
  name: PCSX2 for Windows 8.1 (4eec8d6)
  publishedAt: '2026-10-08T10:12:25Z'
  url: 'https://github.com/pareidolico/pcsx2-win8/releases/tag/win81-2026.10.08'
activity:
  lastSynchronized: '2026-11-13T22:39:21.788Z'
automation:
  sync: true
  github:
    repoEtag: W/"d21e594f3ee34c8cb0947f88b14af5b3d656cb117e0d5c7d0f3250a8658ca9ce"
    releasesEtag: W/"189a6769209517d00388a51985b8df5e4e7ac43e2f08a59fed9c0a00b5c41f7c"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
