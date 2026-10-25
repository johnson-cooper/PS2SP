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
  lastSynchronized: '2026-10-25T22:34:31.023Z'
automation:
  sync: true
  github:
    repoEtag: W/"c0149f32b5e62de49abb14a1f4e020c80068086f1e0a39e262e2f0320ffed164"
    releasesEtag: W/"749cc9f727598235657223bb9119f5fab12e3285af993fda2d38c0caaca3eabe"
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
