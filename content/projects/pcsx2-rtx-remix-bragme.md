---
name: pcsx2-rtx-remix
slug: pcsx2-rtx-remix-bragme
summary: >-
  PCSX2 fork with a native RTX Remix API render backend (PS2 -> path tracing).
  Requires the Remix Plus runtime.
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
  repository: BRAGme/pcsx2-rtx-remix
  repositoryId: '1321919215'
repository:
  archived: false
  defaultBranch: remix-backend
  stars: 2
  forks: 0
  lastCommit: '2026-09-28T16:18:56Z'
latestRelease:
  tag: remix-preview-5
  name: PCSX2 RTX Remix - preview 5
  publishedAt: '2026-09-28T16:19:15Z'
  url: 'https://github.com/BRAGme/pcsx2-rtx-remix/releases/tag/remix-preview-5'
activity:
  lastSynchronized: '2026-11-11T15:13:55.943Z'
automation:
  sync: true
  github:
    repoEtag: W/"73c4af9532848d469002e92fe882da40cafc5ac77498cb599936bc11c9d93763"
    releasesEtag: W/"3c2005b040bd79334056de34087916bf7ea7ec268ddb6ad56eb8149aa7011575"
discovery:
  method: 'fork-network:PCSX2/pcsx2'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
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
