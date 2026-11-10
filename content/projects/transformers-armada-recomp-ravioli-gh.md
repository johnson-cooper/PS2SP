---
name: transformers-armada-recomp
slug: transformers-armada-recomp-ravioli-gh
summary: >-
  Transformers (PS2, 2004) as a native PC game: static recompilation from your
  own disc, native Direct3D 12 renderer, up to 4K / 240 fps / ultrawide. Bring
  your own disc.
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: ravioli-gh/transformers-armada-recomp
  repositoryId: '1451694512'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-10T01:27:15Z'
latestRelease:
  tag: setup-v0.4.5
  name: Setup v0.4.5
  publishedAt: '2026-11-10T00:10:40Z'
  url: >-
    https://github.com/ravioli-gh/transformers-armada-recomp/releases/tag/setup-v0.4.5
activity:
  lastSynchronized: '2026-11-10T01:45:54.437Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      kayliox/transformers-armada-recomp
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: kayliox/transformers-armada-recomp
  source: kayliox/transformers-armada-recomp
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
