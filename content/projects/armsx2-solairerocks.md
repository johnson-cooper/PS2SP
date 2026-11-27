---
name: ARMSX2
slug: armsx2-solairerocks
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
  repository: SolaireRocks/ARMSX2
  repositoryId: '1448921974'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-26T03:41:23Z'
latestRelease:
  tag: armsx2-custom-latest
  name: ARMSX2 Custom (custom-e21d90d5)
  publishedAt: '2026-11-26T03:41:24Z'
  url: 'https://github.com/SolaireRocks/ARMSX2/releases/tag/armsx2-custom-latest'
activity:
  lastSynchronized: '2026-11-27T18:59:53.091Z'
automation:
  sync: true
  github:
    repoEtag: W/"c705ec27facef56edc51542ead32f78ff4c20e8b673ddbc0eb77d91a327c1926"
    releasesEtag: W/"448d9d979b154ed46ee0bf8ff252bff6811e63b9121d8efed550fcaad1211352"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
