from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in portal_mvp/__init__.py
from portal_mvp import __version__ as version

setup(
	name="portal_mvp",
	version=version,
	description="Portal",
	author="svicky.shema@gmail.com",
	author_email="svicky.shema@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
