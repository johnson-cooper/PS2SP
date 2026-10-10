---
name: SNESticleRevive
slug: snesticlerevive-1247847495
summary: 自制超级任天堂模拟器汉化版，适用于Playstation 2，最初基于Acer Addis模拟器。anyi多盒1
categories:
  - emulators
tags:
  - snes
  - nes
  - emulator
  - ps2sdk
  - fork
  - auto-discovered
features:
  - usb
authors: []
license: null
homepage: null
source:
  provider: github
  repository: 1247847495/SNESticleRevive
  repositoryId: '1351241176'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-01T02:54:19Z'
latestRelease:
  tag: v1.0.7-anyi
  name: SNESticle Revive PS2 v1.0.7 汉化版
  publishedAt: '2026-09-01T05:01:44Z'
  url: 'https://github.com/1247847495/SNESticleRevive/releases/tag/v1.0.7-anyi'
activity:
  lastSynchronized: '2026-10-10T18:37:12.858Z'
automation:
  sync: true
  github:
    repoEtag: W/"0c003c50147053453eef15e33df045fa88d54cf84311e3239e1434d7ed2e203e"
    releasesEtag: W/"d1abe7912aa3c4c2fb7a6c5e963295230bf8c9190708753baab25702205c1342"
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release metadata identifies PS2
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ReyFxck/SNESticleRevive'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: ReyFxck/SNESticleRevive
  source: ReyFxck/SNESticleRevive
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
