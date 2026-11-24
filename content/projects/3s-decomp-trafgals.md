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
  lastCommit: '2026-11-15T01:34:17Z'
latestRelease:
  tag: web-data-1
  name: The disc image for the web build
  publishedAt: '2026-10-22T04:36:17Z'
  url: 'https://github.com/trafgals/3s-decomp/releases/tag/web-data-1'
activity:
  lastSynchronized: '2026-11-24T06:03:37.683Z'
automation:
  sync: true
  github:
    repoEtag: W/"e0eaf996c3e53706959de7688f59ee5fad5d242e5acfdb78fab99cef797c25bb"
    releasesEtag: W/"913cd0eae11355fb30af1d46c4ed01f83715d912062f180cf7899ecbf31db7dc"
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
