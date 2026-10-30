---
name: pcsx2-reliquary
slug: pcsx2-reliquary-discostarslayer
summary: PCSX2 Reliquary - PS2 Emulator for the nerds
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: DiscoStarslayer/pcsx2-reliquary
  repositoryId: '1226518373'
repository:
  archived: false
  defaultBranch: master
  stars: 124
  forks: 10
  lastCommit: '2026-10-29T13:39:51Z'
latestRelease:
  tag: v1.10.0-reliquary
  name: v1.10.0-reliquary
  publishedAt: '2026-10-16T21:06:16Z'
  url: >-
    https://github.com/DiscoStarslayer/pcsx2-reliquary/releases/tag/v1.10.0-reliquary
activity:
  lastSynchronized: '2026-10-30T23:48:09.339Z'
automation:
  sync: true
  github:
    repoEtag: W/"438f8309b8f76556967c12c557b5cda8582f40e2fa36d40e8c00f87da70475a2"
    releasesEtag: W/"9db6b173161f3564736df91dd4068274244f77cdf16efe728008c7ad8615d8ae"
discovery:
  method: 'incremental:ps2 in:name,description'
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
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
