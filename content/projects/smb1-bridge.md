---
name: smb1-bridge
slug: smb1-bridge
summary: >-
  Serve modern SMB3 shares to Windows XP, 2000, NT 4.0 and the PS2 over SMB1,
  without turning SMB1 on anywhere else.
categories:
  - uncategorized
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: himi9046-hub/smb1-bridge
  repositoryId: '1389809004'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-09-26T21:33:35Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-09-29T15:52:36.122Z'
automation:
  sync: true
  github:
    repoEtag: W/"3ea23d93f6bada42086d3f17ad208be78f09af6d8bd0184122bd36a306897407"
    releasesEtag: '"9f7d17a30f687b66fec9fd24be194757bcf8913a25baa6f265416110f32074ff"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
  maturity: active-unreleased
verified: false
featured: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
