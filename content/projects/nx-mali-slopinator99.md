---
name: NX-Mali
slug: nx-mali-slopinator99
summary: A fork of the Malisx2 driver focused on Switch Emulation
categories:
  - drivers
  - emulators
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Slopinator99/NX-Mali
  repositoryId: '1456966037'
repository:
  archived: false
  defaultBranch: main
  stars: 4
  forks: 0
  lastCommit: '2026-11-20T21:08:38Z'
latestRelease:
  tag: beta-1
  name: NX-Mali 0.0.3
  publishedAt: '2026-11-13T21:26:10Z'
  url: 'https://github.com/Slopinator99/NX-Mali/releases/tag/beta-1'
activity:
  lastSynchronized: '2026-11-23T00:54:40.311Z'
automation:
  sync: true
  github:
    repoEtag: W/"e6005d3f49409a340299bb3744c70b50936c89cbf9150f9070bcacfccf2d1e70"
    releasesEtag: W/"7ccaf31f2c7ac63861d0722fc8c3893760dc012fd9a7f004107fc0ef3249cde7"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: bmdhacks/malisx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: bmdhacks/malisx2
  source: bmdhacks/malisx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
