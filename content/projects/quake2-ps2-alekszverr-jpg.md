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
  lastSynchronized: '2026-11-15T01:57:54.871Z'
automation:
  sync: true
  github:
    repoEtag: W/"02ae831c39e312776369c69a0b66b53cc2f4b170fdb128bd5c51385408d844e2"
    releasesEtag: W/"63091522eebceb63f5f3a417df4517d792e56c9f445a7d30152a177a095fbeb9"
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
