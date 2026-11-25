---
name: OPL-JUMP
slug: opl-jump
summary: >-
  Community modification for Open PS2 Loader featuring the JUMP page and Smart
  APPS Filter.
categories:
  - loaders
tags:
  - auto-discovered
features: []
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: juankyt505/OPL-JUMP
  repositoryId: '1429338025'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-11-01T05:36:23Z'
latestRelease:
  tag: v1.0.2
  name: OPL JUMP v1.0.2
  publishedAt: '2026-11-01T05:36:24Z'
  url: 'https://github.com/juankyt505/OPL-JUMP/releases/tag/v1.0.2'
activity:
  lastSynchronized: '2026-11-25T02:30:12.733Z'
automation:
  sync: true
  github:
    repoEtag: W/"2bdbc38ab77d0486724cd02e5f01b34698ce152e3a8139d950af5d9bca36707e"
    releasesEtag: W/"bbb68441d005c08aa7d2e2bf1a484c9d3fda5b570373fb171bb071f3b74e79ba"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
