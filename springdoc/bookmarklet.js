if(location.host == 'docs.spring.io') {
  location.href = location.href.replace('docs.spring.io', 'spring.pleiades.io');
} else if(location.host == 'spring.pleiades.io') {
  location.href = location.href.replace('spring.pleiades.io', 'docs.spring.io');
}