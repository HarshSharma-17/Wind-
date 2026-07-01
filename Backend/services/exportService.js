const archiver = require("archiver");

exports.exportProject = async (res, project) => {
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${project.title}.zip"`
  );

  res.setHeader("Content-Type", "application/zip");

  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  archive.on("error", (err) => {
    throw err;
  });

  archive.pipe(res);

  archive.append(project.code, {
    name: "App.jsx",
  });

  await archive.finalize();
};