# Monorepo Multiple Utilies Repository
This is utilities/ adapters/ interfaces package repository. It is mono-repo with code base of each package is present under packages folder.

## Package Breakdown 
1. `sample-package`
    This is sample package, which contains the starting code-base for the new packages. 


## Technologies
- Eslint
- Prettier
- Jest


## Versioning Rules
The guidelines for version updates detailed in the  [```VERSION READ ME```](VERSION.md).

## Release Approaches
1. `Release as Common Package Version:`
To release packages with the common version across all packages, you need to modify the [```lerna.json```] located at the root directory package directory. Within the [```lerna.json```] you should update the ```version``` property. You can take this sample [```Lerna file```](lerna-common.json) as starter lerna configuration file and for this release approach use the following [```workflow file```](.github/workflows/release-common.yml).


2. `Release as Indpendent Package Version:`
To release packages with the independent versioning across all packages, you need to modify the [```package.json```] located at the individual package directory. Within the [```package.json```] you should update the ```version``` property.  You can take this sample [```Lerna file```](lerna-independent.json) as starter lerna configuration file and for this release approach use the following [```workflow file```](.github/workflows/release-independent.yml).

> [!IMPORTANT]  
> Based on release approach, rename sample sample lerna configuration file to ```lerna.json``` and delete the extra lerna configuration template file.
> By default, it is using independent lerna configuration


> [!WARNING]  
> If you are willing to use independent package version, than you might need to downgrade lerna dependency to ```4.0.0```
> When releasing independent, it will not create tag and release on github. 