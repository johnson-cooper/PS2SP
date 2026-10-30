---
name: Cenit
slug: cenit-huevoman77
summary: >-
  Cenit — emulador de PlayStation 2 para Android creado y mantenido por
  HUEVOMAN77. Rendimiento adaptativo para gama baja y media, drivers Turnip
  propios, ajustes por juego. Basado en PCSX2 (GPL-3.0).
categories:
  - emulators
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: 'https://github.com/HUEVOMAN77/Cenit/releases'
source:
  provider: github
  repository: HUEVOMAN77/Cenit
  repositoryId: '1382028495'
repository:
  archived: false
  defaultBranch: master
  stars: 4
  forks: 0
  lastCommit: '2026-10-24T03:18:34Z'
latestRelease:
  tag: base-0.6.44
  name: Cenit 0.6.44 - la cola de cuadros deja de serializar EE y GS
  publishedAt: '2026-10-24T03:18:34Z'
  url: 'https://github.com/HUEVOMAN77/Cenit/releases/tag/base-0.6.44'
activity:
  lastSynchronized: '2026-10-30T23:47:09.344Z'
automation:
  sync: true
  github:
    repoEtag: W/"53f93edb392a5ce9f63ab93e1ee7600e65ef9621389d41cdc48718c718d42319"
    releasesEtag: W/"5bd39f1baa3986221665220cccf283bea367cbc224461a0c0155109e8321d17c"
discovery:
  method: 'incremental:topic:playstation2'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: izzy2lost/PSX2
  source: izzy2lost/PSX2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
