interface NpmPackageData {
  name: string;
  description: string;
  homepage: string;
  version: string;
  main: string;
  module: string;
  types: string;
  type: string;
  scripts: {
    [key: string]: string;
  };
  author: {
    name: string;
  };
  license: string;
  packageManager: string;
  dependencies: {
    [key: string]: string;
  };
  devDependencies: {
    [key: string]: string;
  };
  repository: {
    type: string;
    url: string;
  };
  keywords: string[];
  _id: string;
  gitHead: string;
  bugs: {
    url: string;
  };
  _nodeVersion: string;
  _npmVersion: string;
  dist: {
    integrity: string;
    shasum: string;
    tarball: string;
    fileCount: number;
    unpackedSize: number;
    signatures: {
      keyid: string;
      sig: string;
    }[];
  };
  _npmUser: {
    name: string;
    email: string;
  };
  directories: unknown;
  maintainers: {
    name: string;
    email: string;
  }[];
  _npmOperationalInternal: {
    host: string;
    tmp: string;
  };
  _hasShrinkwrap: boolean;
}

export async function fetchNpmLatest(packageName: string): Promise<NpmPackageData | undefined> {
  try {
    const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`, {
      next: {
        revalidate: 900,
        tags: ["npm"],
      },
    });
    const data: NpmPackageData = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch latest version of ${packageName}: ${error}`);
    return undefined;
  }
}
