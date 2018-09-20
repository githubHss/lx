export const PAGE_SIZE = 10;
export const LIST_SIZE = 20;

export const JobTypes = {
  'enroll_faces': { title: '图片入库', icon: 'database'},
  'detect_faces_in_stream': { title: '视频流实时分析', icon: 'video-camera'},
};

export const JobStatus = {
  "new": { title: '新创建', status: 'default'},
  "pending": { title: '等待中', status: 'warning'},
  "running": { title: '运行中', status: 'processing'},
  "done": { title: '已完成', status: 'success'},
  "failed": { title: '已失败', status: 'failed'},
};
