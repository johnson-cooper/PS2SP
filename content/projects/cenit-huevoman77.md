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
  lastSynchronized: '2026-11-02T23:30:35.241Z'
automation:
  sync: true
  github:
    repoEtag: W/"3bc547e4e4e03991f32b6a51655c1fa876742542e7df03f32cdd4eaa067644bd"
    releasesEtag: W/"031c5da9741ef965b2503a9a3f59945f931d8f3a4d442a5658dce1abb63f2006"
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
