---
name: quake2-ps2
slug: quake2-ps2-alekszverr-jpg
summary: >-
  Active Quake II port for PlayStation 2: VU1 rendering, MD2 models, DualShock
  input, PCSX2 and real-hardware test builds.
categories:
  - games
  - ports
tags:
  - quake
  - quake2
  - fps
  - ps2sdk
  - fork
  - auto-discovered
features:
  - memory-card
authors: []
license: GPL-2.0
homepage: null
source:
  provider: github
  repository: alekszverr-jpg/quake2-ps2
  repositoryId: '1314008450'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-11T07:13:21Z'
latestRelease:
  tag: v0.1.0-alpha.72
  name: Quake II PS2 0.1.0-alpha.72
  publishedAt: '2026-09-13T14:27:52Z'
  url: 'https://github.com/alekszverr-jpg/quake2-ps2/releases/tag/v0.1.0-alpha.72'
activity:
  lastSynchronized: '2026-10-23T01:33:03.717Z'
automation:
  sync: true
  github:
    repoEtag: W/"6d67bb8e34decc6abc3749e96c2f92e3ede9721b45b38e63b7525aad2ef4e629"
    releasesEtag: W/"3929c05bff93d7690e2f58590a6a75d23c800b6c38f4f69f9d088f1fdae3f5c6"
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release metadata identifies PS2
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: glampert/quake2-ps2'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: glampert/quake2-ps2
  source: glampert/quake2-ps2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
