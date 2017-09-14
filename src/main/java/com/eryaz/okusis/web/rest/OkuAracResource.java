package com.eryaz.okusis.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.eryaz.okusis.domain.OkuArac;
import com.eryaz.okusis.service.OkuAracService;
import com.eryaz.okusis.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing OkuArac.
 */
@RestController
@RequestMapping("/api")
public class OkuAracResource {

    private final Logger log = LoggerFactory.getLogger(OkuAracResource.class);

    private static final String ENTITY_NAME = "okuArac";

    private final OkuAracService okuAracService;

    public OkuAracResource(OkuAracService okuAracService) {
        this.okuAracService = okuAracService;
    }

    /**
     * POST  /oku-aracs : Create a new okuArac.
     *
     * @param okuArac the okuArac to create
     * @return the ResponseEntity with status 201 (Created) and with body the new okuArac, or with status 400 (Bad Request) if the okuArac has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/oku-aracs")
    @Timed
    public ResponseEntity<OkuArac> createOkuArac(@RequestBody OkuArac okuArac) throws URISyntaxException {
        log.debug("REST request to save OkuArac : {}", okuArac);
        if (okuArac.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new okuArac cannot already have an ID")).body(null);
        }
        OkuArac result = okuAracService.save(okuArac);
        return ResponseEntity.created(new URI("/api/oku-aracs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /oku-aracs : Updates an existing okuArac.
     *
     * @param okuArac the okuArac to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated okuArac,
     * or with status 400 (Bad Request) if the okuArac is not valid,
     * or with status 500 (Internal Server Error) if the okuArac couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/oku-aracs")
    @Timed
    public ResponseEntity<OkuArac> updateOkuArac(@RequestBody OkuArac okuArac) throws URISyntaxException {
        log.debug("REST request to update OkuArac : {}", okuArac);
        if (okuArac.getId() == null) {
            return createOkuArac(okuArac);
        }
        OkuArac result = okuAracService.save(okuArac);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, okuArac.getId().toString()))
            .body(result);
    }

    /**
     * GET  /oku-aracs : get all the okuAracs.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of okuAracs in body
     */
    @GetMapping("/oku-aracs")
    @Timed
    public List<OkuArac> getAllOkuAracs() {
        log.debug("REST request to get all OkuAracs");
        return okuAracService.findAll();
        }

    /**
     * GET  /oku-aracs/:id : get the "id" okuArac.
     *
     * @param id the id of the okuArac to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the okuArac, or with status 404 (Not Found)
     */
    @GetMapping("/oku-aracs/{id}")
    @Timed
    public ResponseEntity<OkuArac> getOkuArac(@PathVariable Long id) {
        log.debug("REST request to get OkuArac : {}", id);
        OkuArac okuArac = okuAracService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(okuArac));
    }

    /**
     * DELETE  /oku-aracs/:id : delete the "id" okuArac.
     *
     * @param id the id of the okuArac to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/oku-aracs/{id}")
    @Timed
    public ResponseEntity<Void> deleteOkuArac(@PathVariable Long id) {
        log.debug("REST request to delete OkuArac : {}", id);
        okuAracService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
