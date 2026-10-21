---
name: smb1-bridge
slug: smb1-bridge
summary: >-
  Serve modern SMB3 shares to Windows XP, 2000, NT 4.0 and the PS2 over SMB1,
  without turning SMB1 on anywhere else.
categories:
  - host-tools
  - networking
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
  lastSynchronized: '2026-10-21T15:16:31.992Z'
automation:
  sync: true
  github:
    repoEtag: W/"6e4ee1463a8eec1b10fb3e75dbd8595d8b09c4c731ec82acf2166cfdeb947ad7"
    releasesEtag: '"611e30d199f302d8f78bca285a41fb0f9611f5e583be1fd234f471bc48e862ef"'
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
