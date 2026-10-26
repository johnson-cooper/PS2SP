---
name: ARMSX2
slug: armsx2-armsx2
summary: ARMSX2 - The Playstation 2 Emulator for ARM64 Platforms
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: ARMSX2/ARMSX2
  repositoryId: '1036246172'
repository:
  archived: false
  defaultBranch: master
  stars: 2286
  forks: 200
  lastCommit: '2026-10-26T14:16:08Z'
latestRelease:
  tag: '2.9'
  name: ARMSX2 2.9
  publishedAt: '2026-10-26T14:16:39Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.9'
activity:
  lastSynchronized: '2026-10-26T19:19:53.579Z'
automation:
  sync: true
  github:
    repoEtag: W/"539dc91fd18bcbfd9e0034d96e50751e2584f303b54849ef2532aa47169be016"
    releasesEtag: W/"865eb3e69dca74dfd9323f4b2ac339defe7576d5fcaeb8b61abcadd9b3bc8d3b"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
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
