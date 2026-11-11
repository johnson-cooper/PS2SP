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
  stars: 1
  forks: 0
  lastCommit: '2026-09-26T21:33:35Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-11T15:15:14.861Z'
automation:
  sync: true
  github:
    repoEtag: W/"50ee426a9d43557ef747c4070be58e30de5bd080c62d18a4893c2216ba6fc56d"
    releasesEtag: '"4429150f34678cedd74c64579b30809858d8cdb312b1ed77eb714a79c20f6fb1"'
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
