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
  lastSynchronized: '2026-11-28T19:00:09.091Z'
automation:
  sync: true
  github:
    repoEtag: W/"73e8ced83fc1b7f21236e3a58c1e3266c3b11001f7b28a238221c88fd4d2fac8"
    releasesEtag: W/"458c927b59bedf8ad605b8c0d8ff590df3606fca59aab7b552946b88d31f3cf9"
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
