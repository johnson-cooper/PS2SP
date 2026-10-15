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
  lastSynchronized: '2026-10-15T22:19:12.697Z'
automation:
  sync: true
  github:
    repoEtag: W/"7db2679a6a157db907c3a60f7b624db3d8817b50c9cffbf5c0520b8502112172"
    releasesEtag: W/"6becd17f55003a53cf3e73d68016207ddd9773952ac7f5f49852952064d67fb1"
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
