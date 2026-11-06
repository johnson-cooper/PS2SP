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
  lastCommit: '2026-10-26T08:18:33Z'
latestRelease:
  tag: v0.1.0-alpha.72
  name: Quake II PS2 0.1.0-alpha.72
  publishedAt: '2026-09-13T14:27:52Z'
  url: 'https://github.com/alekszverr-jpg/quake2-ps2/releases/tag/v0.1.0-alpha.72'
activity:
  lastSynchronized: '2026-11-06T01:35:36.143Z'
automation:
  sync: true
  github:
    repoEtag: W/"d8af26e2c85110d24d9b7d101dcfe3a9cb896066eabd5f10c034cb7f899d1a00"
    releasesEtag: W/"9988efd1018e0a708027911e4fbfa8557e35a410a819e7fb831f3f579443b8c5"
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
