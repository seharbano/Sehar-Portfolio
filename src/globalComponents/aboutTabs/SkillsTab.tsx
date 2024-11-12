import React from 'react'

const SkillsTab = () => {
  return (
    <div>
      <div className='flex justify-start mb-2 w-full items-center flex-wrap gap-x-4'>
        <p className='text-[15px] max-[620px]:text-[12px]'>Web Development:</p>
        <div className='flex justify-between items-start flex-wrap gap-x-4'>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 24 24">
            <path d="m12 18.178l4.62-1.256l.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866l-2.52.667l-2.52-.667l-.158-1.844h-2.27l.329 3.544zM3 2h18l-1.623 18L12 22l-7.377-2z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 24 24">
            <path d="m5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81l-5.48 1.81l-4.75-1.81l.33-1.64H2.85l-.79 4l7.85 3l9.05-3l1.2-6.03l.24-1.21L21.94 3z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 32 32">
            <path d="M2 2v28h28V2zm15.238 21.837c0 2.725-1.6 3.969-3.931 3.969c-2.106 0-3.325-1.087-3.95-2.406l2.144-1.294c.413.731.788 1.35 1.694 1.35c.862 0 1.412-.338 1.412-1.656v-8.944h2.631zm6.224 3.969c-2.444 0-4.025-1.162-4.794-2.688l2.144-1.237c.563.919 1.3 1.6 2.594 1.6c1.087 0 1.788-.544 1.788-1.3c0-.9-.713-1.219-1.919-1.75l-.656-.281c-1.9-.806-3.156-1.825-3.156-3.969c0-1.975 1.506-3.475 3.85-3.475c1.675 0 2.875.581 3.738 2.106l-2.05 1.313c-.45-.806-.938-1.125-1.694-1.125c-.768 0-1.256.488-1.256 1.125c0 .788.488 1.106 1.619 1.6l.656.281c2.238.956 3.494 1.938 3.494 4.137c0 2.363-1.863 3.662-4.357 3.662z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 24 24">
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 128 128">
            <path d="M22.684 0h84.253v42.667H64.81zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 24 24">
            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2M3.01 12c0-1.3.28-2.54.78-3.66l4.29 11.75c-3-1.46-5.07-4.53-5.07-8.09M12 20.99c-.88 0-1.73-.13-2.54-.37l2.7-7.84l2.76 7.57c.02.04.04.09.06.12c-.93.34-1.93.52-2.98.52m1.24-13.21c.54-.03 1.03-.09 1.03-.09c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.88 0-2.37-.11-2.37-.11c-.48-.02-.54.72-.05.75c0 0 .46.06.94.09l1.4 3.84l-1.97 5.9l-3.27-9.75c.54-.02 1.03-.08 1.03-.08c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.17 0-.37 0-.58-.01C6.1 4.62 8.86 3.01 12 3.01c2.34 0 4.47.89 6.07 2.36c-.04 0-.08-.01-.12-.01c-.88 0-1.51.77-1.51 1.6c0 .74.43 1.37.88 2.11c.34.6.74 1.37.74 2.48c0 .77-.3 1.66-.68 2.91l-.9 3zm6.65-.09a8.99 8.99 0 0 1-3.37 12.08l2.75-7.94c.51-1.28.68-2.31.68-3.22c0-.33-.02-.64-.06-.92" />
          </svg>
        </div>
      </div>
      <div className='flex justify-start w-full items-center flex-wrap gap-x-4'>
        <p className='text-[15px] max-[620px]:text-[12px]'>UI/UX Design:</p>
        <div className='flex justify-between items-start flex-wrap gap-x-4'>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 24 24">
            <path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3Zm14.07 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6c.02.21.03.41.04.58c0 .07-.03.13-.1.16c-.52.22-1.07.38-1.63.48c-.51.09-1.02.14-1.54.14c-.74.01-1.48-.14-2.15-.45c-.63-.29-1.15-.77-1.51-1.36c-.37-.61-.55-1.37-.55-2.28a4.11 4.11 0 0 1 2.14-3.66c.7-.39 1.54-.58 2.53-.58c.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11M3.68 6.3h2.27c.05 0 .1.01.14.02c.04.02.07.05.1.09c.19.43.41.86.64 1.29c.24.43.47.85.72 1.27c.24.42.46.84.67 1.27h.02c.21-.44.43-.87.65-1.29s.45-.84.68-1.26s.45-.85.67-1.26c.01-.04.03-.08.06-.1a.2.2 0 0 1 .13-.02h2.11c.05-.01.1.02.11.07c.01.01-.01.05-.03.07l-3 4.95l3.2 5.25c.02.04.03.08.02.12s-.05.01-.11.02h-2.29c-.16 0-.27-.01-.34-.11c-.21-.42-.43-.83-.64-1.25c-.21-.41-.44-.83-.68-1.26s-.48-.86-.72-1.3h-.02c-.21.43-.44.86-.67 1.29s-.46.86-.68 1.28c-.23.42-.46.85-.69 1.26c-.04.1-.12.11-.23.11h-2.2c-.04 0-.07.02-.07-.03a.14.14 0 0 1 .02-.11l3.11-5.1L3.6 6.44c-.03-.04-.04-.08-.02-.1c.02-.03.06-.04.1-.04m13.94 4.23c-.39 0-.78.08-1.13.26c-.34.17-.63.42-.85.74s-.33.75-.33 1.27c-.01.35.05.7.17 1.03c.1.27.25.51.45.71c.19.18.42.32.68.4c.27.09.55.13.83.13c.15 0 .29-.01.42-.02c.13.01.24-.01.36-.05v-4.4a2.6 2.6 0 0 0-.6-.07" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='[&>path]:hover:fill-[#d3352f] z-20 [&>path]:fill-white cursor-pointer transform transition-transform duration-500 hover:scale-110  w-[20px] h-[20px]' viewBox="0 0 24 24">
            <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2c-.26 0-.49 0-.68.01c-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18c.32-.09.6-.28.82-.53c.21-.25.31-.59.31-1.03c.01-.31-.07-.62-.23-.89a1.45 1.45 0 0 0-.7-.57M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3m-7.391 11.65c-.399.56-.959.98-1.609 1.22c-.68.25-1.43.34-2.25.34c-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11c.17 0 .33 0 .56-.01c.24-.01.49-.01.76-.02s.56-.01.87-.02s.61-.01.91-.01c.82 0 1.5.1 2.06.31c.5.17.96.45 1.34.82c.32.32.57.71.73 1.14c.149.42.229.85.229 1.3q.002 1.29-.6 2.13m7.091 3.89c-.28.4-.671.709-1.12.891c-.49.209-1.09.318-1.811.318c-.459 0-.91-.039-1.359-.129c-.35-.061-.7-.17-1.02-.32c-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09c.029-.02.06-.01.09.01c.39.23.8.391 1.24.49c.379.1.779.15 1.18.15c.38 0 .65-.051.83-.141c.16-.07.27-.24.27-.42c0-.141-.08-.27-.24-.4c-.16-.129-.489-.279-.979-.471c-.51-.18-.979-.42-1.42-.719a2.6 2.6 0 0 1-.761-.85a2.16 2.16 0 0 1-.229-1.021c0-.43.12-.84.341-1.21c.25-.4.619-.72 1.049-.92c.469-.239 1.059-.349 1.769-.349c.41 0 .83.03 1.24.09c.3.04.59.12.86.23c.039.01.08.05.1.09c.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1c-.09.02-.14.02-.18 0c-.3-.16-.62-.27-.96-.34c-.37-.08-.74-.13-1.12-.13c-.2-.01-.41.02-.601.07c-.129.03-.24.1-.31.2c-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27c.229.12.47.23.709.33c.541.18 1.061.43 1.541.73c.33.209.6.49.789.83c.16.318.24.67.23 1.029c.011.471-.129.94-.389 1.331" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SkillsTab