---
name: LUNA
slug: luna-warksmith
summary: 'LUNA is a modern visual game launcher for the PlayStation 2, built on NHDDL. '
categories:
  - loaders
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Warksmith/LUNA
  repositoryId: '1437788729'
repository:
  archived: false
  defaultBranch: integration
  stars: 0
  forks: 0
  lastCommit: '2026-11-12T19:09:09Z'
latestRelease:
  tag: v0.1
  name: v0.1 Experimentation with GameID IGR and UDPFS
  publishedAt: '2026-11-01T01:01:07Z'
  url: 'https://github.com/Warksmith/LUNA/releases/tag/v0.1'
activity:
  lastSynchronized: '2026-11-19T13:07:38.555Z'
automation:
  sync: true
  github:
    repoEtag: W/"38aa00f5b2cecbb1847cfd649692aea7df52e89c86c6bb864bf6f45338b3af33"
    releasesEtag: W/"334da53f59a1b652a22140d9a180699c9c4878b4d918ad378802d53d72af18d2"
discovery:
  method: 'incremental:"PS2 homebrew" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - README identifies PS2 homebrew
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: dnunezx/LUNA'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: dnunezx/LUNA
  source: dnunezx/LUNA
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
