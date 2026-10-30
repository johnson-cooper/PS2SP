---
name: PS3-PSU-Manager
slug: ps3-psu-manager
summary: >-
  PS3 homebrew application for managing PS2 save files, featuring PSU extraction
  and creation, animated 3D save icon previews, format conversion, file
  browsing, renaming, and an integrated HTTPS downloader with homebrew and save
  catalogues.
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: khant735/PS3-PSU-Manager
  repositoryId: '1425262075'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-10-29T01:52:35Z'
latestRelease:
  tag: dev-v1.63-build.220.1
  name: PS3 PSU Manager dev-v1.63-build.220.1
  publishedAt: '2026-10-29T01:52:32Z'
  url: >-
    https://github.com/khant735/PS3-PSU-Manager/releases/tag/dev-v1.63-build.220.1
activity:
  lastSynchronized: '2026-10-30T23:48:49.838Z'
automation:
  sync: true
  github:
    repoEtag: W/"3ebdb4620b7d8392bd3216b5a659778591acd45a25ae27d6068a669b0c378b9c"
    releasesEtag: W/"9e8609ec6ca01b5185cc8564b21afa8ba5aa15e18d3a16971419af169938f505"
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
