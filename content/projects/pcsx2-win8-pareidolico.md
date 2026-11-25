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
  lastSynchronized: '2026-11-25T22:34:19.308Z'
automation:
  sync: true
  github:
    repoEtag: W/"2bb31bbdc498078d1090c89e526a6f1528029bbc55cbfaf895aeab2b09be3d04"
    releasesEtag: W/"99395e5b7fe49a14f9daaacf75d351ac520ace9326c0c95b865b145b84c56f34"
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
