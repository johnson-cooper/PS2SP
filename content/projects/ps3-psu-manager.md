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
  lastCommit: '2026-10-24T08:25:24Z'
latestRelease:
  tag: dev-v1.63-build.211.1
  name: PS3 PSU Manager dev-v1.63-build.211.1
  publishedAt: '2026-10-24T08:25:21Z'
  url: >-
    https://github.com/khant735/PS3-PSU-Manager/releases/tag/dev-v1.63-build.211.1
activity:
  lastSynchronized: '2026-10-26T23:55:25.553Z'
automation:
  sync: true
  github:
    repoEtag: W/"dbe95b6daa7552c5fd652a3015d0f7b9e6ead136d9998e950e53a5e11d9f6498"
    releasesEtag: W/"2f9ec0c74654f12fba3b758c5bf812ba00ea02eaf7ea675a95f6f224d5de83f0"
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
