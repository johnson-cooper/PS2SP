---
name: ico-ps5
slug: ico-ps5-bystritskiy
summary: >-
  Native PS5 port of ICO, based on nathanialf/ico-pc. Requires your own PS2 disc
  data.
categories:
  - preservation
  - development
  - ports
  - games
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: bystritskiy/ico-ps5
  repositoryId: '1444512057'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-11-05T09:53:47Z'
latestRelease:
  tag: 1.000.000
  name: ICO for PS5 1.000.000
  publishedAt: '2026-11-03T16:02:43Z'
  url: 'https://github.com/bystritskiy/ico-ps5/releases/tag/1.000.000'
activity:
  lastSynchronized: '2026-11-08T00:36:24.809Z'
automation:
  sync: true
  github:
    repoEtag: W/"ead2a165f7f085725e65e8ceac12ce1d879edbea47f0340ab82560c49ab45f8e"
    releasesEtag: W/"0a902b4f7be16f6efb3988362e341696d23beb893c6863907f6358bf00ea32a1"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: nathanialf/ico-pc'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: nathanialf/ico-pc
  source: nathanialf/ico-pc
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
