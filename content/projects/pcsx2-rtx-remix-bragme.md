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
  lastSynchronized: '2026-11-08T15:14:12.005Z'
automation:
  sync: true
  github:
    repoEtag: W/"7053bb868709f741b978cb5059b228b2465a3ee1364b01934bd4c3f4ec29dee5"
    releasesEtag: W/"ef82af79a616f342918aa0edc1908998c8e97c4e68b0fe9c35c69c85801a8349"
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
