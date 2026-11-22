---
name: OpenGate
slug: opengate-amxcs
summary: >-
  OpenGate: sd2psXtd 1.5.0 firmware with a built-in boot card that exploits PS2
  BIOS 2.30
categories:
  - hardware
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://sd2psxtd.github.io'
source:
  provider: github
  repository: amxcs/OpenGate
  repositoryId: '1457727480'
repository:
  archived: false
  defaultBranch: opengate
  stars: 6
  forks: 1
  lastCommit: '2026-11-22T14:17:58Z'
latestRelease:
  tag: 1.5.0-opengate
  name: OpenGate 1.5.0
  publishedAt: '2026-11-14T14:09:42Z'
  url: 'https://github.com/amxcs/OpenGate/releases/tag/1.5.0-opengate'
activity:
  lastSynchronized: '2026-11-22T18:03:17.818Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sd2psx/firmware'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: sd2psXtd/firmware
  source: sd2psx/firmware
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
