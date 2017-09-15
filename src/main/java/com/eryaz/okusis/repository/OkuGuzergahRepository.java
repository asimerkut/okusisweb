package com.eryaz.okusis.repository;

import com.eryaz.okusis.domain.OkuGuzergah;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OkuGuzergah entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OkuGuzergahRepository extends JpaRepository<OkuGuzergah, Long> {

}
