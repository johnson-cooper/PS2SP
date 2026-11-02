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
  lastSynchronized: '2026-11-02T15:55:22.386Z'
automation:
  sync: true
  github:
    repoEtag: W/"9a844344b454d4df45a69712880174c266ba97dda4f647099f4d19b48447daf8"
    releasesEtag: '"a9f324b2a61da9854a428d9d24f3a16e20fe5f6fad6077a79cab1349ea45188c"'
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
