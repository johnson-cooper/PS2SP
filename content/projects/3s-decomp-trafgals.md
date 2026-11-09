---
name: 3s-decomp
slug: 3s-decomp-trafgals
summary: 'Decompilation of Street Fighter III: 3rd Strike for PlayStation 2'
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: AGPL-3.0
homepage: null
source:
  provider: github
  repository: trafgals/3s-decomp
  repositoryId: '1426582173'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-22T05:51:05Z'
latestRelease:
  tag: web-data-1
  name: The disc image for the web build
  publishedAt: '2026-10-22T04:36:17Z'
  url: 'https://github.com/trafgals/3s-decomp/releases/tag/web-data-1'
activity:
  lastSynchronized: '2026-11-09T06:28:30.269Z'
automation:
  sync: true
  github:
    repoEtag: W/"d2ea8a965090c097c31d9dadad9fc40009e2871774d55c8697a651872896c3ac"
    releasesEtag: W/"673ac92aa666308ce7768b64675b646138920c22d5ca6cd991878359ded140cc"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: crowded-street/3s-decomp'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: crowded-street/3s-decomp
  source: crowded-street/3s-decomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
